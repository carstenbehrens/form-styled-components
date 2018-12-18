/* eslint-disable arrow-parens */
import React from 'react';
import { Field, SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import {
  Form,
  SubmitButton,
  TextArea,
  Input,
  Spinner,
  Circle,
  FieldContainer,
  Label,
  FieldContainerMessage,
  Title,
  SuccessMessage,
} from '../styled/ContactFormStyled';

// Here we check if the form is valid
const submit = (values) => {
  if (!values.fullName) {
    throw new SubmissionError({
      fullName: 'Please enter a name!',
      _error: 'Submission Failed!',
    });
  } else if (!values.message) {
    throw new SubmissionError({
      message: 'Please enter a message!',
      _error: 'Submission Failed!',
    });
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    throw new SubmissionError({
      email: 'Invalid email address!',
      _error: 'Submission Failed!',
    });
  }
};

const renderField = ({
  input, placeholder, type, meta: { error },
}) => (
  <Input
    {...input}
    placeholder={error || placeholder}
    type={type}
    error={error}
  />
);

const renderTextField = ({
  input, placeholder, type, meta: { error },
}) => (
  <TextArea
    {...input}
    placeholder={error || placeholder}
    type={type}
    error={error}
  />
);

const ContactForm = props => {
  const {
    handleSubmit,
    submitting,
    onSave,
    reset,
    submitSucceeded,
  } = props;

  const mySubmit = values => {
    // Form Validation
    submit(values);
    return onSave(values)
      .then(response => {
        // Reset the from when submitting was successful
        reset();
        return response;
      })
      .catch(e => {
        throw new SubmissionError(e);
      });
  };

  return (
    <Form onSubmit={handleSubmit(mySubmit)}>
      <Title>Contact:</Title>
      <FieldContainer>
        <Label htmlFor="fullName">Full Name:</Label>
        <Field
          name="fullName"
          type="text"
          component={renderField}
          placeholder="Max Mustermann"
          disabled={submitting}
        />
      </FieldContainer>
      <FieldContainerMessage>
        <Label htmlFor="message">Message:</Label>
        <Field
          name="message"
          type="textarea"
          component={renderTextField}
          placeholder="Hi, how are you doing today?"
          disabled={submitting}
        />
      </FieldContainerMessage>
      <FieldContainer>
        <Label htmlFor="email">Email:</Label>
        <Field
          name="email"
          type="email"
          component={renderField}
          placeholder="max.mustermann@email.com"
          disabled={submitting}
        />
      </FieldContainer>
      <SubmitButton type="submit">
        {submitting ? (
          <Spinner viewBox="0 0 66 66">
            <Circle
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              cx="33"
              cy="33"
              r="30"
            />
          </Spinner>
        ) : (
          'Submit'
        )}
      </SubmitButton>
      {submitSucceeded ? (<SuccessMessage>Thank you for your message!</SuccessMessage>) : ('')}
    </Form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ContactForm;
