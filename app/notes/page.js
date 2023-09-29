import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const Notes = (page) => {
  const newNote = () => {
    return (
      <div className="flex justify-between items-center mt-2 gap-4">
        <Input
          type="text"
          placeholder="Search Notes..."
          className="my-4 p-4 rounded-lg"
        />
        <Button
          variant="outline"
          className="hover:text-primary border-2 my-4 p-4 py-5 rounded-lg"
        >
          <PlusCircledIcon className="w-6 h-6" />
          <span className="ml-2 w-20">New Note</span>
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-10">
          Notes
        </h1>
        <div className="flex justify-between items-center mt-2 gap-4">
          <Input
            type="text"
            placeholder="Search Notes..."
            className="my-4 p-4 rounded-lg"
          />
          <Dialog>
            <DialogTrigger>
              <Button
                variant="outline"
                className="hover:text-primary border-2 my-4 p-4 py-5 rounded-lg"
                onAction
              >
                <PlusCircledIcon className="w-6 h-6" />
                <span className="ml-2 w-20">New Note</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-lg">
              <DialogHeader>New Note</DialogHeader>
              <Input
                type="text"
                placeholder="Note Title"
                className="my-4 p-4 rounded-lg"
              />
              <Textarea
                className="my-4 p-4 rounded-lg"
                placeholder="Note Description"
              />
              <Button variant="outline" className="hover:text-primary w-full">
                Save
              </Button>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>My First Note</CardTitle>
              <CardDescription>Created 2 days ago</CardDescription>
            </CardHeader>
            <CardContent>Lorem ipsum d</CardContent>
            <CardFooter className="flex gap-4">
              <Dialog>
                <DialogTrigger>
                  <Button variant="outline" className="hover:text-primary">
                    View
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-lg">
                  <DialogHeader>Date</DialogHeader>
                  <Input
                    type="text"
                    placeholder="Note Title"
                    className="my-4 p-4 rounded-lg"
                  />
                  <Textarea
                    className="my-4 p-4 rounded-lg"
                    placeholder="Note Description"
                  />
                  <Button
                    variant="outline"
                    className="hover:text-primary w-full"
                  >
                    Save
                  </Button>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <Button variant="outline" className="hover:text-destructive">
                    Delete
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-lg">
                  <DialogHeader>Are you sure?</DialogHeader>
                  <p className="text-sm">
                    This action cannot be undone. This will permanently delete
                    your note.
                  </p>
                  <Button
                    variant="outline"
                    className="hover:text-destructive w-full"
                  >
                    Delete
                  </Button>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Notes;
