import  { useRef, useEffect } from 'react';
import Quill from 'quill';

const QuillOptions = ({ content }) => {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        modules: {
          toolbar: false, // Disable toolbar for read-only mode
        },
        readOnly: true, // Set the editor to be read-only
      });

      // If content is provided, set it into the editor
      if (content) {
        try {quill.setContents(content);}
        catch (error) {
          console.error('Error parsing content:', error);
        }
      }


      // Cleanup function to remove the editor when the component unmounts
      return () => {
        if (quillRef.current) {
          quillRef.current.innerHTML = ''; // Clear the container
        } 
      };
    }
  }, [content]); // Re-run the effect whenever content changes

  return (
    <div>
      <div ref={quillRef} style={{ height: '300px' }}></div> {/* Container for Quill editor */}
    </div>
  );
};

export default QuillOptions;
