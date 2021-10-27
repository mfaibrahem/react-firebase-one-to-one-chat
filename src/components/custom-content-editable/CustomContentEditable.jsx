import React from "react";
import ContentEditable from "react-contenteditable";

const CustomContentEditable = () => {
	return (
		<ContentEditable
			html={editableRef.current}
			onBlur={handleBlur}
			onChange={handleChange}
			placeholder="mfa"
			onKeyDown={handleContetnEditableKeyDown}
			className="editable-chat-input"
		/>
	);
};

export default CustomContentEditable;
