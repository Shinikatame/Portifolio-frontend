export type ReposProps = {
    "data": Repos
  }
  
  export type Repos = [
  {
    "name": string,
    "description": string,
    "url": string,
    "homepageUrl": string,
    'languages': [string],
    'primaryLanguage': string
  }
]