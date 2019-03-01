1. What is the purpose of using sessions?

    Sessions allow a server to store information about a client by persisting the data across multiple requests to the server.

2. What does bcrypt do to help us store passwords in a secure manner.

    Bcrypt uses algorithms to hash passwords or make them cryptic so they are not stored in plain text. 
	
3. What does bcrypt do to slow down attackers?
	
	Bcrypt uses and algorithm to hash the password and then a timing function as well so that it is harder to decipher the password
     because an attacker needs to figure out what algorithm is used, the hash that was used, and the timing rounds that were used when 
     the hashed password was created by bcrypt. So it simply makes it harder for attackers to decipher the passwords. 
	
4. What are the three parts of the JSON Web Token?

	A JWT contains a header, a payload, and a signature.
