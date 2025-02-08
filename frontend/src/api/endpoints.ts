const endpoints = {
  USER: {
    DOCS: '/api/sources',
    DOCS_CHECK: '/api/docs_check',
    DOCS_PAGINATED: '/api/sources/paginated',
    API_KEYS: '/api/get_api_keys',
    CREATE_API_KEY: '/api/create_api_key',
    DELETE_API_KEY: '/api/delete_api_key',
    PROMPTS: '/api/get_prompts',
    CREATE_PROMPT: '/api/create_prompt',
    DELETE_PROMPT: '/api/delete_prompt',
    UPDATE_PROMPT: '/api/update_prompt',
    SINGLE_PROMPT: (id: string) => `/api/get_single_prompt?id=${id}`,
    DELETE_PATH: (docPath: string) => `/api/delete_old?source_id=${docPath}`,
    TASK_STATUS: (task_id: string) => `/api/task_status?task_id=${task_id}`,
    MESSAGE_ANALYTICS: '/api/get_message_analytics',
    TOKEN_ANALYTICS: '/api/get_token_analytics',
    FEEDBACK_ANALYTICS: '/api/get_feedback_analytics',
    LOGS: `/api/get_user_logs`,
    MANAGE_SYNC: '/api/manage_sync',
    GET_AVAILABLE_TOOLS: '/api/available_tools',
    GET_USER_TOOLS: '/api/get_tools',
    CREATE_TOOL: '/api/create_tool',
    UPDATE_TOOL_STATUS: '/api/update_tool_status',
    UPDATE_TOOL: '/api/update_tool',
    DELETE_TOOL: '/api/delete_tool',
    GET_CHUNKS: (docId: string, page: number, per_page: number) =>
      `/api/get_chunks?id=${docId}&page=${page}&per_page=${per_page}`,
    ADD_CHUNK: '/api/add_chunk',
    DELETE_CHUNK: (docId: string, chunkId: string) =>
      `/api/delete_chunk?id=${docId}&chunk_id=${chunkId}`,
  },
  CONVERSATION: {
    ANSWER: '/api/answer',
    ANSWER_STREAMING: '/stream',
    SEARCH: '/api/search',
    FEEDBACK: '/api/feedback',
    CONVERSATION: (id: string) => `/api/get_single_conversation?id=${id}`,
    CONVERSATIONS: '/api/get_conversations',
    SHARE_CONVERSATION: (isPromptable: boolean) =>
      `/api/share?isPromptable=${isPromptable}`,
    SHARED_CONVERSATION: (identifier: string) =>
      `/api/shared_conversation/${identifier}`,
    DELETE: (id: string) => `/api/delete_conversation?id=${id}`,
    DELETE_ALL: '/api/delete_all_conversations',
    UPDATE: '/api/update_conversation_name',
  },
};

export default endpoints;
