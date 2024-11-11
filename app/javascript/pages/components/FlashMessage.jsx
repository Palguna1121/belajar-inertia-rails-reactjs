import React from "react";

const FlashMessage = ({ message }) => {
  return (
    <div>
      {/* Alerts: Success */}
      {message?.success && (
        <div className="rounded bg-emerald-100 p-4 text-emerald-700 md:p-5 dark:bg-emerald-900/75 dark:text-emerald-100">
          <div className="mb-2 flex items-center">
            <svg className="hi-solid hi-check-circle mr-3 inline-block size-5 flex-none text-emerald-500 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="font-semibold">{message.success}</h3>
          </div>
          {/* <p className="ml-8">
          Manage all available projects from your{" "}
          <a href="#" className="text-emerald-600 underline hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-300">
            personal dashboard
          </a>
          .
        </p> */}
        </div>
      )}
      {/* END Alerts: Success */}

      {/* Alerts: Error */}
      {message?.error && (
        <div className="rounded bg-rose-100 p-4 text-rose-700 md:p-5 dark:bg-rose-900/75 dark:text-rose-100">
          <div className="mb-2 flex items-center">
            <svg className="hi-solid hi-check-circle mr-3 inline-block size-5 flex-none text-rose-500 dark:text-rose-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="font-semibold">{message.error}</h3>
          </div>
          {/* <p className="ml-8">
          Manage all available projects from your{" "}
          <a href="#" className="text-rose-600 underline hover:text-rose-400 dark:text-rose-400 dark:hover:text-rose-300">
            personal dashboard
          </a>
          .
        </p> */}
        </div>
      )}
      {/* END Alerts: Error */}
    </div>
  );
};

export default FlashMessage;
