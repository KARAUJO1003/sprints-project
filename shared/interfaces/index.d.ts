//{ params }: { params: Promise<{ id: string }> }

export interface IParamsID {
  id: string;
}

export interface IParams {
  params: Promise<IParamsID>;
}
