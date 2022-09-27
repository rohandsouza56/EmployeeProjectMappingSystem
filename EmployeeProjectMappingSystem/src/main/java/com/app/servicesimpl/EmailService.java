package com.app.servicesimpl;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.pojos.Employee;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void sendEmailForNewRegistration(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("noreply.epms@gmail.com");
        message.setTo(email);
        message.setSubject("Welcome to EPMS.");
        message.setText("Thank you for Registering with us!");
        emailSender.send(message);
    }

    public void sendOtp(String email, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setFrom("noreply.epms@gmail.com");
        message.setSubject("OTP");
        message.setText(otp);
        emailSender.send(message);
    }

    public void sendEmailForPasswordReset(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("noreply.epms@gmail.com");
        message.setTo(email);
        message.setSubject("Your password has been changed!");
        message.setText("This is a confirmation that the password for your EPMS account has just been changed.");
        emailSender.send(message);
    }
    
    public void sendSimpleEmail(String toEmail,
            Employee employee,
            String subject) throws MessagingException {
		SimpleMailMessage message = new SimpleMailMessage();

		String body = "Hi,\n\n"+employee.getEmployeeName()+" has requested for project change.Please find below employee details:\n"
				+ "\n Employee Id : "+employee.getEmployeeId()+""
						+ "\n Email : "+employee.getEmail()
						+ "\n Designation : "+employee.getDesignation()
						+ "\n Contact : "+employee.getMobileNo()
						+ "\n Gender : "+employee.getGender()
						+ "\n Date of Joining : "+employee.getDateOfJoining()
						+ "\n\n Please log in to EPMS Portal to download Employee Resume. "
						+ "\n\n Thanks & Regards,\nProject Mapping Systems";
		message.setFrom("projectmappingsystems@gmail.com");
		message.setTo(toEmail);
		message.setText(body);
		message.setSubject(subject);
		
		System.out.println(toEmail);
		System.out.println(body);
		System.out.println(subject);
		
		//Another Way
		
		//MimeMessage message=sendMail.createMimeMessage();
		//MimeMessageHelper helper=new MimeMessageHelper(message);
		//helper.setFrom("godserushi1997@gmail.com");
		//helper.setTo(toEmail);
		//helper.setText(body);
		//helper.setSubject(subject);
		
		emailSender.send(message);
		
		System.out.println("Mail Send...");
}

}
