import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
export default function SubmitBtn () {
  const { pending } = useFormStatus()
  return (
        <button
            type="submit"
            className="h-[3rem] group flex items-center
             justify-center gap-2 w-[8rem] hover:bg-gray-950
              focus:scale-110 hover:scale-110 active:scale-105 bg-gray-900
              text-white rounded-full outline-none transition-all disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
            disabled={pending}>
            {pending
              ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                )
              : (
                <>
                    Wyślij{' '}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
                </>
                )}
        </button>
  )
}
