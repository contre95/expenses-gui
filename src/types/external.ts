export type ImportersMsg = {
  Msg: string;
  SuccessfullImports: number;
  FailedImports: number;
};

export type APIResponse = {
  success: boolean;
  err: string | null;
  msg: string | ImportersMsg | null;

  data?: Record<string, unknown>[] | null;
};
