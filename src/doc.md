## Login

API call `https://testing-app-backend.bwpapps.com/user/login` start the login process.

On success, the server returns a encoded token.

After decoding the data, we can access user specific details:

```js
{
  "user_id": "638887d464a08a62bf08ad3f",
  "role": "customer",
  "exp": 1671455687,
  "iss": "https://apps.cedcommerce.com",
  "token_id": "63a02b87df24f2c0bb005d02"
}
```

---

API call `https://testing-app-backend.bwpapps.com/connector/get/all` returns information about the target and the souce.

`is_source:` key determines whether the object is source or not.

`is_target:` key determines whether the object is target or not.

---

API call `https://testing-app-backend.bwpapps.com/connector/frontend/getStepCompleted` returns the current status of the on-boarding process.

---

Details fetched from the above 3 api calls like `user_id`, `source`, `target`, `stepActive` are saved in redux.

## Forgot Password

API call `https://testing-app-backend.bwpapps.com/user/forgot` sends the password reset link to the email.

Payload:

```js
email: "sarthakshukla@cedcommerce.com"
frontend_app_url: "http://localhost:4000"
reset-link: "http://localhost:4000/auth/reset/"
subject: "Reset your password for Social Ads for Buy with Prime Account"
target_marketplace: "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9"
templateSource: "onyx"
```

The key `templateSource` is used identify the email template and `subject` will be the subject of the email.

On successs, a URL of the form: `http://localhost:4000/auth/reset/?token=token` will be the sent to the user's email.

URL `http://localhost:4000/auth/reset/?token=token` opens the password reset page. The `token` is used to identify the user resetting the password.

URL `https://testing-app-backend.bwpapps.com/core/user/forgotreset` shows the success message that that password has been reset.

# Register

When signing up for a new account API call `https://testing-app-backend.bwpapps.com/onyx/user/isEmailExist` verifies whether the email already exist in the db or not.

URL `https://testing-app-backend.bwpapps.com/onyx/user/optMail/` sends OTP the the mail.

URL `https://testing-app-backend.bwpapps.com/onyx/user/validateOtp/` validates the OTP.
