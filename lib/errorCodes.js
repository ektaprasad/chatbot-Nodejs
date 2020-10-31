/**
 * Defined API errors.
 */
module.exports = {
    INTERNAL: {
      code: "INTERNAL",
      status: 500,
      message: "Internal server error."
    },
    UNAUTHORIZED: {
      code: "UNAUTHORIZED",
      status: 401,
      message: "Unauthorized access."
    },
    NOT_IMPLEMENTED: {
      code: "NOT_IMPLEMENTED",
      status: 501,
      message: "Resource method not implemented."
    },
    INVALID_INPUT: {
      code: "INVALID_INPUT",
      status: 400,
      message: "Invalid input in request."
    },
    INVALID_INPUT_FORMAT: {
      code: "INVALID_INPUT_FORMAT",
      status: 400,
      message: "Invalid input in format."
    },
    NOT_FOUND: {
      code: "NOT_FOUND",
      status: 404,
      message: "No such resource exists."
    },
    NOT_ALLOWED: {
      code: "NOT_ALLOWED",
      status: 403,
      message: "Operation not allowed."
    },
    NO_ACCESS: {
      code: "NO_ACCESS",
      status: 403,
      message: "Access not allowed."
    },
    INVALID_KEY: {
      code: "INVALID_KEY",
      status: 401,
      message:
        "Valid api key is required. Please provide a valid api key along with request."
    },
    INVALID_LOGIN: {
      code: "INVALID_LOGIN",
      status: 401,
      message: "Login credentials do not match any registered user."
    }
  };
  