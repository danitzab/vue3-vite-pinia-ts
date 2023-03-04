export default {
  fields: {
    alphaNum: {
      message1: 'alphanumeric field',
      message2: 'The {field} field must be alphanumeric',
    },
    alreadyExists: {
      message1: '{field} already exists',
      message2: '{field} {value} already exists',
    },
    required: {
      message1: 'required field',
      message2: 'The {field} field is required',
    },
    min: {
      message1: 'must be greater than or equal to {value}',
      message2: 'The {field} field must be greater than or equal to {value}',
    },
    max: {
      message1: 'must be less than or equal to {value}',
      message2: 'The {field} field must be less than or equal to {value}',
    },
    minlength: {
      message1: 'minimum {value} characters',
      message2: 'The {field} field must have a minimum of {value} characters',
    },
    maxlength: {
      message1: 'maximum {value} characters',
      message2: 'The {field} field must have a maximum of {value} characters',
    },
    pattern: {
      message1: 'invalid format',
      message2: 'The {field} field has an invalid format',
    },
    mustMatch: {
      message1: 'fields do not match',
      message2: 'The {field} field does not match',
    },
    email: {
      message1: 'invalid format',
      message2: 'The {field} field has an invalid format',
    },
    invalidCharacters: {
      message1: 'Invalid Characters',
      message2: 'The {field} field has invalid characters',
    },
    sameAs: {
      message1: 'Fields do not match',
      message2: '{field1} and {field2} fields do not match',
    },
  },
};
