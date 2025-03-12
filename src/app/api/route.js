import { NextResponse } from "next/server"

export async function GET(request) {

  console.log('hello ')
  return NextResponse.json({
    success: true,
    message: "Hello from the backend, Ruben"
  })
}
