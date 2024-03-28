import React, { useState, useEffect } from 'react';

const UnlockMobile = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState('');
  const [timer, setTimer] = useState(null);
  const COUNTDOWN_DURATION = 30; // 30 seconds countdown
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    // Start the countdown timer
    // const countdownTimer = setTimeout(() => {
    //   setSentOtp(''); // Clear OTP after countdown
    // }, COUNTDOWN_DURATION * 1000);

    // Clear timer on component unmount
    return () => {
      clearTimeout(timer);
    //   clearTimeout(countdownTimer);
    };
  }, [timer]);

  useEffect(() => {
    let countdownTimer;

    // Start the countdown
    if (countdown > 0) {
      countdownTimer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    // Clear timer on component unmount
    return () => {
      clearTimeout(countdownTimer);
    };
  }, [countdown]);


  // Function to generate and send OTP
  const generateOTP = () => {
    // Simulate OTP generation and sending to the phone number
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);
    setSentOtp(generatedOtp.toString());

    // Start the countdown timer
    // setTimer(
    //   setTimeout(() => {
    //     setSentOtp('');
    //   }, COUNTDOWN_DURATION * 1000)
    // );
  };

  // Function to handle sending OTP to friend
  const handleSendToFriend = () => {
    generateOTP(); // Generate new OTP
  };

  return (
    <div>
      <h2>Unlock Mobile</h2>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <button onClick={generateOTP}>Unlock</button>
      </div>
      {sentOtp && (
        <div>
          <p>OTP Sent: {sentOtp}</p>
          <p>Countdown: {countdown} seconds</p>
          <button onClick={handleSendToFriend}>Send OTP to friend</button>
        </div>
      )}
    </div>
  );
};

export default UnlockMobile;
