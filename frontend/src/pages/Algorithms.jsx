import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import "../styles/algorithms.css";

const sortingAlgorithms = [
    {
        name: "Bubble Sort",
        slug: "bubble-sort",
        description: "Repeatedly compares adjacent values and swaps them until the array is sorted."
    },
    {
        name: "Selection Sort",
        slug: "selection-sort",
        description: "Finds the smallest remaining element and places it into its correct position."
    },
    {
        name: "Insertion Sort",
        slug: "insertion-sort",
        description: "Builds a sorted list one element at a time by inserting each value where it belongs."
    },
    {
        name: "Merge Sort",
        slug: "merge-sort",
        description: "Divides the array into halves, sorts them, and merges the results efficiently."
    },
    {
        name: "Quick Sort",
        slug: "quick-sort",
        description: "Partitions data around a pivot and recursively sorts the smaller sections."
    },
    {
        name: "Heap Sort",
        slug: "heap-sort",
        description: "Uses a heap structure to repeatedly extract the largest element in order."
    }
];

const searchingAlgorithms = [
    {
        name: "Linear Search",
        slug: "linear-search",
        description: "Checks each element one by one until the target value is found."
    },
    {
        name: "Binary Search",
        slug: "binary-search",
        description: "Efficiently finds an element in a sorted array by repeatedly dividing the search space."
    }
];

const treeAlgorithms = [
    {
        name: "Binary Tree Traversal",
        slug: "binary-tree-traversal",
        description: "Visits nodes in a binary tree in a structured order such as inorder or preorder."
    },
    {
        name: "Binary Search Tree",
        slug: "binary-search-tree",
        description: "Organizes data in a tree so smaller values go left and larger values go right."
    }
];

const graphAlgorithms = [
    {
        name: "Breadth First Search (BFS)",
        slug: "breadth-first-search",
        description: "Explores a graph level by level to find nearby nodes first."
    },
    {
        name: "Depth First Search (DFS)",
        slug: "depth-first-search",
        description: "Traverses a graph by exploring one path deeply before backtracking."
    },
    {
        name: "Dijkstra's Algorithm",
        slug: "dijkstras-algorithm",
        description: "Finds the shortest path from one node to every other reachable node."
    },
    {
        name: "Kruskal's Algorithm",
        slug: "kruskals-algorithm",
        description: "Builds a minimum spanning tree by choosing the lightest non-cycling edges."
    },
    {
        name: "Prim's Algorithm",
        slug: "prims-algorithm",
        description: "Grows a minimum spanning tree by expanding from one node using the smallest edge."
    }
];

const aiAlgorithms = [
    {
        name: "A* Search",
        slug: "a-star-search",
        description: "Finds an efficient path by combining actual distance traveled with a heuristic estimate."
    },
    {
        name: "Minimax",
        slug: "minimax",
        description: "Chooses the best move in competitive games by assuming the opponent also plays optimally."
    },
    {
        name: "K-Nearest Neighbors",
        slug: "k-nearest-neighbors",
        description: "Classifies a new point by comparing it to the most similar known examples."
    },
    {
        name: "K-Means Clustering",
        slug: "k-means-clustering",
        description: "Groups similar data points into clusters by repeatedly refining cluster centers."
    }
];

const algorithmSections = [
    {
        title: "Sorting Algorithms",
        description: "Build intuition for ordering data from simple comparisons to divide-and-conquer strategies.",
        algorithms: sortingAlgorithms
    },
    {
        title: "Searching Algorithms",
        description: "Compare straightforward scans with efficient search techniques for structured data.",
        algorithms: searchingAlgorithms
    },
    {
        title: "Tree Algorithms",
        description: "Understand how hierarchical structures support traversal, lookup, and organization.",
        algorithms: treeAlgorithms
    },
    {
        title: "Graph Algorithms",
        description: "Explore traversal, shortest paths, and spanning tree strategies used in networks and maps.",
        algorithms: graphAlgorithms
    },
    {
        title: "AI Algorithms",
        description: "Preview classic AI and machine learning algorithms that can later be explored visually.",
        algorithms: aiAlgorithms
    }
];

function AlgorithmCard({ name, description, onExplore }) {
    return (
        <article className="algorithm-card">
            <div className="algorithm-card-body">
                <h3 className="algorithm-card-title">{name}</h3>
                <p className="algorithm-card-description">{description}</p>
            </div>

            <button type="button" className="algorithm-card-button" onClick={onExplore}>
                {"Explore \u2192"}
            </button>
        </article>
    );
}

function Algorithms() {
    const navigate = useNavigate();

    return (
        <div className="page-container algorithms-page">
            <Navbar />

            <main className="algorithms-main">
                <div className="algorithms-shell">
                    <section className="algorithms-hero">
                        <div className="algorithms-hero-content">
                            <span className="algorithms-eyebrow">Algorithm Library</span>
                            <h1 className="algorithms-title">Explore the Core Algorithms</h1>
                            <p className="algorithms-copy">
                                Browse every placeholder algorithm card in AlgoVision. Visualizations will be added next,
                                but you can already explore the roadmap and navigate to each future algorithm page.
                            </p>

                            <div className="algorithms-meta">
                                <span className="algorithms-meta-chip">19 algorithms</span>
                                <span className="algorithms-meta-chip">Sorting, Searching, Trees, Graphs, AI</span>
                                <span className="algorithms-meta-chip">Visualization pages coming next</span>
                            </div>
                        </div>
                    </section>

                    <section className="algorithms-grid-section">
                        <div className="algorithms-section-stack">
                            {algorithmSections.map((section) => (
                                <section key={section.title} className="algorithm-category-section">
                                    <div className="algorithm-category-header">
                                        <h2 className="algorithm-category-title">{section.title}</h2>
                                        <p className="algorithm-category-copy">{section.description}</p>
                                    </div>

                                    <div className="algorithms-grid">
                                        {section.algorithms.map((algorithm) => (
                                            <AlgorithmCard
                                                key={algorithm.slug}
                                                {...algorithm}
                                                onExplore={() => navigate(`/algorithms/${algorithm.slug}`)}
                                            />
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Algorithms;
