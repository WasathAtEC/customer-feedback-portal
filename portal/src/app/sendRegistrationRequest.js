import axios from 'axios';

// ... (your existing code)
const URL = 'http://localhost:8000/api/v1/user/register';

const sendRegistrationRequest = async () => {
  try {
    const response = await axios.post(URL , {
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      password: formData.password,
      // Include other fields if needed
    });

    // Handle success (e.g., show a success message)
    console.log('Registration successful:', response.data);
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('Registration failed:', error);
  }
};
export default sendRegistrationRequest;
