import Tool from "./_components/Tool"
import { cn } from "@/lib/utils"

function Home() {
  return (
    <div>
      <Tool 
        name="DNS Checker" 
        description="DNS Checker" 
        url="/dns"
      />
      <Tool 
        name="Whois Checker"
        description="Whois Checker"
        url="/whois"
      />
      <Tool
        name="IP Checker"
        description="IP Checker"
        url="/ip"
      />
      <Tool
        name="Domain Checker"
        description="Domain Checker"
        url="/domain"
      />
      <Tool
        name="Website Rank Checker"
        description="Website Rank Checker"
        url="/rankings"
      />
      <Tool
        name="Reverse IP Checker"
        description="Reverse IP Checker"
        url="/reverse-ip"
      />
      <Tool
        name="Website Screenshot Generator"
        description="Website Screenshot Generator"
        url="web-screenshot"
      />
      <Tool
        name="SEO Checker"
        description="SEO Checker"
        url="/seo-checker"
      />
      <Tool
        name="Virus Checker"
        description="Virus Checker"
        url="/virus-checker"
      />
      <Tool
        name="Source Code Checker"
        description="Source Code Checker"
        url="/source-code"
      />
      <Tool
        name="AI Chatbot"
        description="AI Chatbot"
        url="/chatbot"
      />
      <Tool
        name="QR Code Generator"
        description="QR Code Generator"
        url="/qrcode-generator"
      />
      <Tool
        name="URL Shortener"
        description="URL Shortener"
        url="/url-shortener"
      />
      <Tool 
        name="Password Generator"
        description="Password Generator"
        url="/password-generator"
      />
      
    </div>

  )
}

export default Home