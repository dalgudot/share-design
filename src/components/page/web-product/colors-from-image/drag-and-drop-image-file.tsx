import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const DragAndDropImageFile = ({ children }: { children: JSX.Element }) => {
  const [dragging, setDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);
  const dropRef = useRef<HTMLDivElement>(null);
  const dropRefCurrent = dropRef.current;

  const handleDragIn = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('DragIn');
    setDragCounter(dragCounter + 1);
    console.log(dragCounter);
    if (e?.dataTransfer?.items && e?.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragOut = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('DragOut');
    setDragCounter(dragCounter - 1);
    setDragging(false);
  };
  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter - 1);
    setDragging(false);
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);

    if (e?.dataTransfer?.items && e?.dataTransfer.items.length > 0) {
      e.dataTransfer.files;
      e.dataTransfer.clearData();
      setDragCounter(0);
    }
  };

  useEffect(() => {
    setDragCounter(0);
    dropRefCurrent?.addEventListener('dragenter', handleDragIn);
    dropRefCurrent?.addEventListener('dragleave', handleDragOut);
    dropRefCurrent?.addEventListener('dragover', handleDrag);
    dropRefCurrent?.addEventListener('drop', handleDrop);

    // console.log('useEffet');

    return () => {
      dropRefCurrent?.removeEventListener('dragenter', handleDragIn);
      dropRefCurrent?.removeEventListener('dragleave', handleDragOut);
      dropRefCurrent?.removeEventListener('dragover', handleDrag);
      dropRefCurrent?.removeEventListener('drop', handleDrop);
    };
  }, []);

  // console.log(dragging);

  return (
    <>
      <Container ref={dropRef}>
        {dragging && (
          <div
            style={{
              border: 'dashed grey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
            }}
          />
        )}
        {children}
      </Container>
    </>
  );
};

export default DragAndDropImageFile;

const Container = styled.div``;
