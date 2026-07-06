import './PreviewContent.css';

const PreviewContent = ({ pdfUrl }) => {
    return (
        <div className="preview-container">
            <iframe 
                src={pdfUrl} 
                className="preview-iframe"
                title="PDF Preview"
            />
        </div>
    );
};

export default PreviewContent;
