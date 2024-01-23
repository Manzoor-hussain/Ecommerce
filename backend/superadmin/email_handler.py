from django.core.mail import EmailMultiAlternatives
import smtplib
from email.mime.text import MIMEText
from django.template.loader import render_to_string


def send_email(subject, template_name, email, attach_file=None, context=None):
    try:
        sender = 'support@tayyen.com'
        recipient = email

        html_content = render_to_string(template_name=template_name, context=context)

        msg = MIMEText(html_content, 'html')
        msg['Subject'] = subject
        msg['From'] = sender
        msg['To'] = recipient
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login('mariegreat123@gmail.com', 'cudehzmnmyszihxl')
        server.sendmail(sender, [recipient], msg.as_string())
        server.quit()
        return True
        

    except Exception as e:
        print(e)
    return


def send_emails(subject, template_name, emails, attach_file=None, context=None):
    try:
        # sender = 'developer@irvinetek.com'
        # recipient = emails
        #
        # html_content = render_to_string(template_name=template_name, context=context)
        #
        # msg = MIMEText(html_content, 'html')
        # msg['Subject'] = subject
        # msg['From'] = sender
        # msg['To'] = recipient
        # server = smtplib.SMTP_SSL('smtp.zoho.com', 465)
        # server.login('developer@irvinetek.com', 'pcayrqDIcIGW')
        # server.sendmail(sender, recipient, msg.as_string())
        # server.quit()
        return True
        # if context is None:
        #     context = {}
        # text_content = render_to_string(template_name, context)
        # html_content = render_to_string(template_name, context)
        #
        # email_instance = EmailMultiAlternatives(subject, text_content)
        # email_instance.attach_alternative(html_content, "text/html")
        # email_instance.to = emails
        #
        # if attach_file:
        #     for obj in attach_file:
        #         email_instance.attach_file(obj)
        # email_instance.send()

    except Exception as e:
        print(e)
    return


