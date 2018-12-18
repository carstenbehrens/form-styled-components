/* eslint-disable no-console */
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ContactForm from '../components/ContactForm';
import { formSend } from '../actions';

let ContactFormContainer = reduxForm({
  form: 'contact',
})(ContactForm);

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
  // I'm dispatching an action, just for example sake.
  onSave: contactFormValues => new Promise((resolve) => {
    // 2500ms to simulate server latency...
    setTimeout(() => {
      console.log('Now dispatching action with type FORM_SEND');
      console.log(contactFormValues);
      dispatch(formSend(contactFormValues));
      resolve();
    }, 2500);
  }),
});

// We'll pass this mergeProps parameter to redux's connect is what allows us
// to override as we please during testing. In this container,
// mapDispatchToProps provides an onSave prop to our component, but we want to
// override onSave during testing (e.g. so we know if it's called or not).
const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps,
) => Object.assign({}, stateProps, dispatchProps, ownProps);

ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(ContactFormContainer);

export default ContactFormContainer;
