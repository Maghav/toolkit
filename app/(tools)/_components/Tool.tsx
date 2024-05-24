import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link"
import { cn } from "@/lib/utils"

function Tool(
    {name, description, url, className}:{ 
        className?:string
        name: string,
        description: string, 
        url: string
    }
) {
  return (
    <Card className={cn("w-[380px]", className)}>
        <CardHeader>
            <CardTitle>
                {name}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription>
                {description}
            </CardDescription>
            <Link href={url} target="_blank"> Click Here</Link>
        </CardContent>
    </Card>
  )
}

export default Tool