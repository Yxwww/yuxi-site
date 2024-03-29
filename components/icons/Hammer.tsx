export default function Hammer({ className, title = '' }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      x="0px"
      y="0px"
      width="122.88px"
      height="114.571px"
      fill="currentColor"
      viewBox="0 0 122.88 114.571"
      enableBackground="new 0 0 122.88 114.571"
      xmlSpace="preserve"
    >
      {title ? <title>{title}</title> : null}
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.434,13.656c-3.005-1.173-6.107-1.783-9.309-1.783 c-4.813,0-8.77,1.538-11.872,4.592L24.479,43.215l2.785,2.81L17.101,56.261L0,39.136l10.164-10.164l3.152,3.08L39.942,5.447 C43.607,1.808,47.539,0,51.741,0C58.803,0,65.689,4.545,72.434,13.656L72.434,13.656z M122.88,98.985l-15.588,15.586 c-24.895-25.965-47.369-49.544-72.25-75.524l12.311-12.311C73.297,51.653,96.888,74.116,122.88,98.985L122.88,98.985z"
        />
      </g>
    </svg>
  );
}
