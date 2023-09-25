const questions = [
  {
    id: 1,
    title:
      "What is a DDoS attack, and how can organizations defend against it?",
    info: "A Distributed Denial of Service (DDoS) attack is when multiple compromised computers are used to flood a target system with traffic, causing it to become overwhelmed and unavailable. Organizations can defend against DDoS attacks by implementing mitigation strategies such as traffic filtering, load balancing, and utilizing content delivery networks (CDNs) to distribute traffic.",
  },
  {
    id: 2,
    title:
      "What is two-factor authentication (2FA) and why is it important for online security?",
    info: "Two-factor authentication (2FA) is a security process that requires users to provide two different authentication factors before granting access, typically something they know (password) and something they have (e.g., a smartphone or token). It enhances online security by adding an extra layer of protection against unauthorized access, even if a password is compromised.",
  },
  {
    id: 3,
    title:
      "What is ransomware, and how should individuals and organizations respond to a ransomware attack?",
    info: "Ransomware is malicious software that encrypts a victim's data and demands a ransom in exchange for the decryption key. When facing a ransomware attack, individuals and organizations should isolate affected systems, report the incident to law enforcement, and consider their options for data recovery, such as restoring from backups (if available) rather than paying the ransom.",
  },
  {
    id: 4,
    title:
      "What is phishing, and what are common red flags to identify phishing emails?",
    info: "Phishing is a fraudulent attempt to obtain sensitive information, such as login credentials and financial details, by posing as a trustworthy entity in emails or messages. Common red flags for identifying phishing emails include suspicious sender addresses, generic greetings, urgent or threatening language, and requests for sensitive information or money transfers.",
  },
  {
    id: 5,
    title:
      "What is the role of a firewall in network security, and how does it work?",
    info: "A firewall is a network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks, filtering traffic to block malicious or unauthorized access while allowing legitimate traffic to pass through. Firewalls can be hardware-based or software-based and play a crucial role in protecting networks from cyber threats.",
  },
];
export default questions;
