use core::settings::RuntimeSettings;

use actix_web::HttpResponse;
use paperclip::actix::{
    api_v2_operation,
    web::{Data, Path, ServiceConfig},
};
use shared::{
    api::{endpoints::admin, ApiEndpoint},
    domain::auth::SigninSuccess,
};
use sqlx::PgPool;
use uuid::Uuid;

use crate::{
    db, error,
    extractor::{reply_signin_auth, AuthUserWithScope, ScopeAdmin},
};

/// Impersonate another user
#[api_v2_operation]
async fn impersonate(
    _auth: AuthUserWithScope<ScopeAdmin>,
    settings: Data<RuntimeSettings>,
    db: Data<PgPool>,
    user: Path<Uuid>,
) -> actix_web::Result<HttpResponse, error::UserNotFound> {
    let user_id = user.into_inner();

    let exists = db::user::exists(&db, user_id).await?;

    if !exists {
        return Err(error::UserNotFound::UserNotFound);
    }

    let (csrf, cookie) =
        reply_signin_auth(user_id, &settings.jwt_encoding_key, settings.is_local())?;

    Ok(HttpResponse::Ok()
        .cookie(cookie)
        .json(SigninSuccess { csrf }))
}

pub fn configure(cfg: &mut ServiceConfig<'_>) {
    cfg.route(
        admin::Impersonate::PATH,
        admin::Impersonate::METHOD.route().to(impersonate),
    );
}
