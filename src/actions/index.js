/* eslint-disable import/prefer-default-export */
export const formSend = contactFormValues => ({
  type: 'FORM_SEND',
  payload: contactFormValues,
});
