interface IReviewDto {
    _id: string;
    UserId: string;
    ReviewEntityId: string;
    ReviewEntityName: string;
    Rating: number;
    Comment: string;
}

export type { IReviewDto };
