import { AppDataSource } from "../db";
import { Book } from "../models/Book";

export const bookSeeder = async () => {
    try {
        await AppDataSource.initialize();

        const books = [
            { title: "Harry Potter", description: "jqwndjqnadjolx", author_id: 1 },
            { title: "Don Quixote", description: "jqwndjqnadjolx", author_id: 3 },
            { title: "El prisoner", description: "jqwndjqnadjolx", author_id: 1  },
            { title: "Viento en casa", description: "jqwndjqnadjolx", author_id: 17   },
            { title: "El oso Puci", description: "jqwndjqnadjolx", author_id: 12  },
            { title: "Naruto", description: "jqwndjqnadjolx", author_id: 23   },
            { title: "WOW chronicles", description: "jqwndjqnadjolx", author_id: 6  },
            { title: "Green hornet", description: "jqwndjqnadjolx", author_id: 5 },
        ]

        const newBooks = await createAuthors(books);

        await Book.save(newBooks);

        console.log('===========================');
        console.log('Book seeder successfully');
        console.log('===========================');
    } catch (error: any) {
        console.log('===========================');
        console.log('ERROR BOOK SEEDER', error.message);
        console.log('===========================');
    } finally {
        await AppDataSource.destroy();
    }
}

const createAuthors = async (authors: any) => {  
    const newAUthors: Book[] = []
  
    authors.forEach((element: any, index: any) => {
      console.log(index);
      
      const author = new Book();
      author.id = index + 1;
      author.title = element.title;
      author.description = element.description;
      newAUthors.push(author)
    });
  
    return newAUthors;
  }