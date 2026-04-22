"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function AddTask({createATask}) {
  return (
<Modal>
      <Button variant="secondary">AddTask</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add Task</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">

                {/* 🔥 এখানে change */}
                <form action={createATask} className="flex flex-col gap-4">

                  <TextField name="name">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField name="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>

                  <TextField name="phone">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>

                  <TextField name="company">
                    <Label>Company</Label>
                    <Input placeholder="Enter your company name" />
                  </TextField>

                  <TextField name="message">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>

                  <Modal.Footer>
                    <Button type="button" variant="secondary">
                      Cancel
                    </Button>

                    {/* 🔥 গুরুত্বপূর্ণ */}
                    <Button type="submit">Submit task</Button>
                  </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}