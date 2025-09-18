"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { BookData } from "@/types";

export default function BookCard({ book }: { book: BookData }) {
  return (
  <Card className="w-full max-w-[48rem] flex flex-col sm:flex-row items-stretch border-b-2 border-gray-200">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full sm:w-2/5 shrink-0 rounded-none sm:rounded-r-none border-b-2 border-gray-200 flex justify-center items-center"
      >
        <img
          src={book.image}
          alt={book.bookName}
          className="object-cover w-40 h-40 sm:w-full sm:h-full"
        />
      </CardHeader>
      <CardBody className="w-full">
        <Typography variant="h4" color="gray" className="mb-4 uppercase">
          {book.bookName}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          作者：{book.author.join(", ")}
        </Typography>
         <Typography variant="h6" color="blue-gray" className="mb-2">
          出版社：{book.publisher}
        </Typography>
         <Typography variant="h6" color="blue-gray" className="mb-2">
          出版日期：{book.publicDate}
        </Typography>
         <Typography variant="h6" color="blue-gray" className="mb-2">
          ISBN:{book.isbn}
        </Typography>
         <Typography variant="h6" color="blue-gray" className="mb-2">
          EISBN：{book.eisbn}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
            {book.description}
        </Typography>
        {/* <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a> */}
      </CardBody>
    </Card>
  );
}