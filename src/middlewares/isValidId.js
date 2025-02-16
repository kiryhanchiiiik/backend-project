import { isValidObjectId } from 'mongoose';

import createError from 'http-errors';
export const isValidId = (req, res, next) => {
  const { contactId } = req.params;

  if (!isValidObjectId(contactId)) {
    return next(createError(404, `${contactId} not valid id`));
  }
  next();
};
