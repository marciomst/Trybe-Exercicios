import React from 'react';

function QuestionCard(props) {
  const { question } = props;
  return (
    <section className="question-card">
      <header className="question-card-header">
        <img
          className="question-card-image"
          src="https://res.cloudinary.com/robertotcestari/image/upload/v1647528142/trybe/bruno_nle7hb.png"
          alt=""
        />
        {question.name}
      </header>
      <p className="question-card-body">{question.question}</p>

      {/* <p className="question-card-claps"> */}
      <div className="question-card-claps">
        <svg className="claps" width={18} viewBox="0 0 24 24" onClick={() => {}}>
          <path
            fill="currentColor"
            d="M7.9 21.47C6 19.81 5.35 17.17 6.18 14.84L8.31 8.91C8.53 8.3 9.36 8.22 9.69 8.78L10 9.33C10.24 9.72 10.29 10.2 10.14 10.63L9.16 13.37L9.59 13.75L15.55 7C15.9 6.6 16.5 6.56 16.91 6.91C17.3 7.26 17.34 7.87 17 8.26L12.55 13.29L13.13 13.8L18.58 7.62C18.93 7.22 19.54 7.18 19.93 7.53C20.33 7.88 20.37 8.5 20 8.89L14.56 15.07L15.14 15.58L19.83 10.26C20.18 9.86 20.79 9.82 21.18 10.17S21.62 11.13 21.27 11.5L16.58 16.84L17.15 17.35L20.32 13.76C20.67 13.36 21.28 13.32 21.68 13.67S22.11 14.63 21.76 15L16.56 20.92C14.32 23.47 10.44 23.71 7.9 21.47M11.59 9.22L14.43 6C14.67 5.73 14.97 5.5 15.3 5.37L15.68 4.59C15.92 4.12 15.72 3.54 15.24 3.31C14.77 3.08 14.19 3.28 13.96 3.75L11.45 8.89C11.5 9 11.56 9.11 11.59 9.22M11 8L11 8.05L13.78 2.38C14 1.9 13.81 1.33 13.33 1.1C12.86 .865 12.28 1.06 12.05 1.54L9.41 6.95C10.06 7.06 10.63 7.43 11 8M4.77 14.33L6.9 8.4C7.17 7.65 7.8 7.14 8.55 6.97L10.69 2.58C10.92 2.1 10.72 1.53 10.25 1.3C9.77 1.07 9.2 1.26 8.97 1.74L5 9.84L4.5 9.59L4.71 6.68C4.75 6.23 4.57 5.78 4.25 5.46L3.79 5C3.32 4.57 2.55 4.86 2.5 5.5L2 11.79C1.87 13.83 2.77 15.78 4.35 17C4.33 16.12 4.46 15.21 4.77 14.33Z"
          />
        </svg>
        {question.claps}
        {' '}
        Palmas
      </div>
      <svg onClick={() => {}} className="trash" width={20} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
        />
      </svg>
    </section>
  );
}

export default QuestionCard;
