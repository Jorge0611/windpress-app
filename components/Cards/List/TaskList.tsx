import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SimpleCard from "../SimpleCard";
import Item from "../TaskCard/Item";

interface Props {
  items: any[];
}

export const TaskList = ({ items }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [identifier, setIdentifier] = useState("");
  return (
    <AnimateSharedLayout>
      <div>
        {items.map((item, key) => (
          <SimpleCard
            key={key}
            id={item._id}
            name={item.name}
            status={item.status}
            dueDate={item.dueDate}
            users={item.users}
            onClick={() => {
              setIdentifier(item._id);
              setIsOpen(true);
            }}
          />
        ))}
      </div>
      <AnimatePresence exitBeforeEnter>
        {isOpen && identifier && (
          <Item
            id={identifier}
            items={items}
            deleteApi={`/api/task/${identifier}`}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
