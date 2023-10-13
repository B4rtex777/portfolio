'use server'
import { Resend } from 'resend'

import { validatestring, getErrorMessage } from '@/lib/utils'
import ContactFormEmail from '@/email/contact-form-email'
import React from 'react'
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message')
  const senderEmail = formData.get('senderEmail')
  if (!validatestring(senderEmail, 500)) {
    return {
      error: 'invalid sender email'
    }
  }
  if (!validatestring(message, 5000)) {
    return {
      error: 'invalid sender message'
    }
  }
  let data
  try {
    await resend.emails.send({
      from: ' Contact form <onboarding@resend.dev>',
      to: 'bkarpinski798@wp.pl',
      subject: 'Message from contact',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string })

    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }
  return {
    data
  }
}
