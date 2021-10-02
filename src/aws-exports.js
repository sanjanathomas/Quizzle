const awsmobile = {
    "aws_project_region": "us-east-2",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_AYEqR6MFS",
    "aws_user_pools_web_client_id": "2c511i92nttupq5a0qmch2ml03",
    "oauth": {
        "domain": "quizzle.auth.us-east-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:4200/verify",
        "redirectSignOut": "http://localhost:4200/login",
        "responseType": "code"
    }
};

export default awsmobile;