import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

const ContactDetailsSkeleton = () => {
  return (
    <div>
      {/* Email Contact */}
      <div className="rounded-r-lg p-3 gap-2">
        <a href="#" className="flex flex-row items-center hover:text-purple-700">
          <span className="mr-3 text-lg">
            <MdAlternateEmail />
          </span>
          {/* Placeholder for Email */}
          <span>Email Address</span>
        </a>
      </div>

      {/* Phone Contact */}
      <div className="rounded-r-lg p-3">
        <a href="#" className="flex flex-row items-center hover:text-purple-700">
          <span className="mr-3 text-lg">
            <FaPhoneAlt />
          </span>
          {/* Placeholder for Phone */}
          <span>Phone Number</span>
        </a>
      </div>
    </div>
  )
}

export default ContactDetailsSkeleton
