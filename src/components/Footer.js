// React Library
import React from 'react'

export default function Footer(){
    const footerStyle = {
        'position': 'absolute',
        'bottom': '0',
        'width': '100%',
        'height': '60px',
        'line-height': '60px',
        'background-color': '#f5f5f5'
    }

	return(
		<footer style={footerStyle}>
            <div className="container">
                <span className="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
	)
}