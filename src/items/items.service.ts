import {BaseItem, Item} from './item.interface';
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const findAll = async (): Promise<Item[]> => {
  try {
    const items = await prisma.Item.findMany();
    console.log("Find All:",items);
    return items;
  } catch (e) {
    console.error('Error in findAll:', e);
    throw e;
  }
};

export const find = async (id: number): Promise<Item | null> => {
  try {
    const item = await prisma.Item.findUnique({ where: { id } });
    console.log("Find:",item)
    return item;
  } catch (e) {
    throw e;
  }
};

export const create = async (newItem: BaseItem): Promise<Item> => {
  try {
    const createdItem = await prisma.Item.create({
      data: {
        price: newItem.price,
        name: newItem.name,
        description: newItem.description,
        image: newItem.image,
      },
    });
    console.log("Create:", createdItem)
    return createdItem;
  } catch (e) {
    throw e;
  }
};

export const update = async (
    id: number,
    itemUpdate: BaseItem
): Promise<Item | null> => {
  try {
    const updatedItem = await prisma.Item.update({
      where: { id },
      data: itemUpdate,
    });
    console.log("Updated:", updatedItem)
    return updatedItem;
  } catch (e) {
    throw e;
  }
};

export const remove = async (id: number): Promise<void> => {
  try {
    await prisma.Item.delete({ where: { id } });
  } catch (e) {
    throw e;
  }
};
