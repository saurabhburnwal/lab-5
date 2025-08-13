import { useEffect, useId } from 'react';

function Modal({ isOpen, onClose, title, children, size = 'md', showCloseButton = true }) {
  const titleId = useId();
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <section aria-hidden="true" className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <section
        className={`relative z-10 w-full max-w-2xl mx-4 bg-gradient-to-br from-blue-500/20 via-pink-500/20 to-purple-600/20 border border-white/20 rounded-lg shadow-2xl text-white`}
      >
        <header className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h3 id={titleId} className="text-lg md:text-xl font-semibold">{title}</h3>
          {showCloseButton && (
            <button
              aria-label="Close"
              className="text-white/80 hover:text-white p-2 rounded hover:bg-white/10 transition"
              onClick={onClose}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          )}
        </header>
        <section className="px-5 py-4">{children}</section>
      </section>
    </section>
  );
}

export default Modal;
