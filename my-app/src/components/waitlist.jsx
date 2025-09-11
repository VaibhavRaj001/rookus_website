"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

const Waitlist = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Prevent duplicate script/style injection
    if (!document.querySelector("#waitlist-style")) {
      const link = document.createElement("link");
      link.id = "waitlist-style";
      link.rel = "stylesheet";
      link.href =
        "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css";
      document.head.appendChild(link);
    }

    if (!document.querySelector("#waitlist-script")) {
      const script = document.createElement("script");
      script.id = "waitlist-script";
      script.src =
        "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-xl p-8 mx-4 w-full max-w-md max-h-[80vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Waitlist widget container */}
        <div
          id="getWaitlistContainer"
          data-waitlist_id="18113"
          data-widget_type="WIDGET_1"
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default Waitlist;