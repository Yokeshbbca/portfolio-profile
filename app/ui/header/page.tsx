"use client"

import { Search, ShipWheel, SidebarIcon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarInput } from "@/components/ui/sidebar"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"

export default function SiteHeader() {
  const [searchTerm, setSearchTerm] = useState("")

  const contents = ["Home", "About", "Services", "Projects", "Contact"];

  const removeHighlights = () => {
    const highlights = document.querySelectorAll(".custom-highlight")
    highlights.forEach((span) => {
      const parent = span.parentNode
      if (!parent) return
      parent.replaceChild(document.createTextNode(span.textContent || ""), span)
      parent.normalize() 
    })
  }

  const highlightMatches = (term: string) => {
    removeHighlights()
  
    if (!term) return
  
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) =>
          node.parentElement &&
          node.parentElement.tagName !== "SCRIPT" &&
          node.parentElement.tagName !== "STYLE" &&
          node.nodeValue &&
          node.nodeValue.toLowerCase().includes(term.toLowerCase())
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT,
      }
    )
  
    const matches: Text[] = []
    while (walker.nextNode()) {
      matches.push(walker.currentNode as Text)
    }
  
    matches.forEach((textNode) => {
      const parent = textNode.parentNode
      if (!parent) return
  
      const regex = new RegExp(`(${term})`, "gi")
      const parts = textNode.nodeValue!.split(regex)
  
      const fragment = document.createDocumentFragment()
  
      parts.forEach((part) => {
        if (part.toLowerCase() === term.toLowerCase()) {
          const mark = document.createElement("span")
          mark.textContent = part
          mark.style.backgroundColor = "yellow"
          mark.className = "custom-highlight"
          fragment.appendChild(mark)
        } else {
          fragment.appendChild(document.createTextNode(part))
        }
      })
  
      parent.replaceChild(fragment, textNode)
    })
  }

  useEffect(() => {
    highlightMatches(searchTerm)
  }, [searchTerm])

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full justify-between items-center gap-2 px-4">
        <div className="flex items-center h-full gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="h-8 w-8"
                variant="ghost"
                size="icon"
              >
                <SidebarIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:w-[22vw] w-[50vw]">
              <SheetHeader>
                <SheetTitle>
                <div className="flex gap-1 text-md items-center font-bold">
                  <ShipWheel />
                  MyPortfolio.
                </div>
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <Separator orientation="horizontal" className="w-full" />
              <ul className="flex gap-1 flex-col p-2">
                {contents.map((item, i) => (
                  <Button variant={"ghost"} className="w-full flex items-start justify-start" key={i}>{item}</Button>
                ))}
              </ul>    
            </SheetContent>
          </Sheet>
          
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex gap-1 text-md items-center font-bold">
            <ShipWheel />
            MyPortfolio.
          </div>
        </div>
        <div className='flex gap-2 '>
          <form>
            <div className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <SidebarInput
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type to search..."
                className="h-8 pl-7"
              />
              <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
            </div>
          </form>
          <Button variant="outline">
            <Sun />
          </Button>
        </div>
      </div>
    </header>
  )
}
