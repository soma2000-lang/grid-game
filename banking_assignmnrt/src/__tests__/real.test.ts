import { describe, beforeEach, it, expect } from 'vitest';
import { TestFactory } from './helpers/TestFactory';
import type { TestFixtures } from './helpers/TestFactory';

describe('Bank Server tests',()=>
{

    let fixtures:TestFixtures;
    beforeEach(() => {
        fixtures = TestFactory.createFixtures();
      
})