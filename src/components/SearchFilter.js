import Data from "../mock-data.json";
import {useState} from "react";
import { Input } from '@chakra-ui/react'


function SearchFilter() {
const [query, setQuery] = useState("")
{
  {
    Data.filter(post => {
      if (query === '') {
        return post;
      } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
        return post;
      }
    }).map((post, index) => (
      <div className="box" key={index}>
        <p>{post.name}</p>
        <p>{post.description}</p>
      </div>
    ))
  }
} 
  return (
    <div>
      <Input placeholder="Enter course" onChange={event => setQuery(event.target.value)}/>
    </div>
  
  );
}
export default SearchFilter