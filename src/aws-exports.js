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
        "redirectSignIn": "https://hackdfw-quizzle.s3.us-east-2.amazonaws.com/verify",
        "redirectSignOut": "https://hackdfw-quizzle.s3.us-east-2.amazonaws.com/login",
        "responseType": "code"
    }
};

export default awsmobile;