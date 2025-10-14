import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-900 text-gray-300">
      <div>
        <img src={logo} alt="AppVerse Logo" className="w-12 h-12 mb-2" />
        <p className="font-bold text-xl">AppVerse Ltd.</p>
        <p>Your universe of applications since 2023.</p>
      </div>
      <div>
        <span className="footer-title">Quick Links</span>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/apps" className="link link-hover">All Apps</Link>
        <Link to="/installation" className="link link-hover">My Installation</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
       <div>
        <span className="footer-title">Follow Us</span>
        <div className="grid grid-flow-col gap-4">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.634 4.208 3.808 4.649-.4.108-.82.166-1.25.166-.307 0-.606-.03- .9-.083.6 1.877 2.341 3.246 4.402 3.284-1.623 1.27-3.666 2.028-5.893 2.028-.383 0-.76-.022-1.13-.065 2.099 1.353 4.604 2.148 7.321 2.148 8.788 0 13.598-7.277 13.598-13.598 0-.207-.005-.412-.014-.617.933-.673 1.73-1.513 2.368-2.454z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path></svg></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
