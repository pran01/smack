import React from 'react';

const SignIn= () => {
    return(
        <div className='h-full w-full bg-[#1A1D21] text-[#D1D2D3]'>
            <div className='login-container flex flex-col items-center h-screen'>
                <div className='header grid grid-cols-3 gap-4 items-center py-12 w-full'>
                    <div className='left-col'></div>
                    <div className='center-col text-center flex justify-center '>
                        <img alt = "smack" className='h-8' src={require("../assets/images/Slack-900x0.png")}></img>
                        <h1 className='text-3xl font-bold'>Smack</h1>
                    </div>
                    <div className='right-col flex justify-end '>
                        <div className='text-right text-sm pr-10'>
                            New to smack?
                            <br></br>
                            <a href='#' className='font-bold text-[#1264a3] no-underline'>Create an Account</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center grow shrink-0 w-full'>
                    <h1 className='text-5xl font-bold tracking-tighter leading-10 mb-10 max-w-700 mx-auto text-center'>
                        Sign in to Smack
                    </h1>
                    <div className='text-center leading-7 text-lg mb-8 max-w-700'>
                        We suggest using the <span className='font-bold'>email address you use at work</span>
                    </div>
                    <div className='flex py-3 px-6'>
                        <span className = 'pl-3'>
                        We'll email you a magic code for a password-free sign in. Or you can <br></br>
                        <a href='#' className='font-bold text-[#1264a3] no-underline'>sign in manually instead</a>.
                        </span>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignIn;
    



