import { Router, Request, Response } from 'express';
import * as localRepos from '../../data/repos.json';

export const repos = Router();

// function falseFork(ele_val: object) {
//   return ele_val.fork === true;
// }

// const filteredRepos = localRepos.filter(falseFork);
// console.log(filteredRepos);

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(localRepos);
});
