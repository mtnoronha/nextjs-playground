'use client';

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary disabled:bg-slate-400" type="submit" disabled={pending}>
      {pending? 'Loading' : 'Save'}
    </button>
  )
}
