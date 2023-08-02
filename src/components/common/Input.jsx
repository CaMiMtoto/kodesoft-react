import PropTypes from "prop-types";

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
}

export default function Input({label, name, error, placeholder, className, type = "text", ...rest}) {
    return (
        <div className="my-3">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} placeholder={placeholder} type={type}
                   className={`border-2 border-gray-100 px-4  rounded-md focus:outline-none focus:border-warning w-full focus:ring focus:ring-warning/30 placeholder:text-gray-500  placeholder:text-sm ${className}`}/>
            {error && <div className="text-danger text-xs mt-1">{error}</div>}
        </div>
    );
}