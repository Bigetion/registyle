import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { cx } from 'registyle';

function BasicTextField() {
  const [name, setName] = useState('');

  return (
    <div className="preview-stack text-field-demo">
      <label className="text-field-label" htmlFor="text-field-name">Full name</label>
      <input
        className="text-field-control"
        id="text-field-name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="e.g. Alex Morgan"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <span className="text-field-helper">Enter the name you use at work.</span>
    </div>
  );
}

function ValidationTextField() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const inputId = 'text-field-email';
  const hintId = `${inputId}-hint`;
  const inputIsInvalid = email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const hasError = submitted && (!email || inputIsInvalid);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleChange(event) {
    setEmail(event.target.value);
    if (submitted) setSubmitted(false);
  }

  return (
    <form className="preview-stack text-field-demo" noValidate onSubmit={handleSubmit}>
      <label className="text-field-label" htmlFor={inputId}>Work email</label>
      <input
        className={cx('text-field-control', hasError && 'text-field-control-error')}
        id={inputId}
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        aria-invalid={hasError || undefined}
        aria-describedby={hintId}
        required
        onChange={handleChange}
      />
      <span className={cx('text-field-helper', hasError && 'text-field-helper-error')} id={hintId}>
        {hasError
          ? !email ? 'Email is required.' : 'Enter a valid email address.'
          : 'We’ll use this to send your account updates.'}
      </span>
      <div className="text-field-actions">
        <button className="mui-button mui-button-contained" type="submit">Continue</button>
        <span className="text-field-helper" role="status" aria-live="polite">
          {submitted && !hasError ? 'Email looks good.' : ''}
        </span>
      </div>
    </form>
  );
}

function AdornedTextField() {
  const [query, setQuery] = useState('');

  return (
    <div className="preview-stack text-field-demo">
      <label className="text-field-label" htmlFor="text-field-search">Search settings</label>
      <div className="text-field-shell">
        <Search className="text-field-leading-icon" size={16} aria-hidden="true" />
        <input
          className="text-field-control text-field-control-adorned"
          id="text-field-search"
          type="text"
          inputMode="search"
          aria-label="Search settings"
          placeholder="Search preferences"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query && (
          <button
            className="text-field-clear"
            type="button"
            aria-label="Clear search"
            onClick={() => setQuery('')}
          >
            <X size={14} aria-hidden="true" />
          </button>
        )}
      </div>
      <span className="text-field-helper">Search across your preferences.</span>
    </div>
  );
}

export default function TextFieldDemo({ demoId }) {
  if (demoId === 'text-field-validation') return <ValidationTextField />;
  if (demoId === 'text-field-adornments') return <AdornedTextField />;
  return <BasicTextField />;
}
